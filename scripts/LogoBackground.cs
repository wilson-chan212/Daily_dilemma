using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;

public static class LogoBackground
{
    private static bool Visited(bool[] visited, int w, int x, int y)
    {
        return visited[y * w + x];
    }

    private static void SetVisited(bool[] visited, int w, int x, int y, bool v)
    {
        visited[y * w + x] = v;
    }

    private static void TryEnqueue(Bitmap bmp, bool[] visited, int w, int h, Queue<Point> q, int x, int y)
    {
        if (x < 0 || y < 0 || x >= w || y >= h) return;
        if (Visited(visited, w, x, y)) return;
        Color c = bmp.GetPixel(x, y);
        if (!IsBackground(c)) return;
        SetVisited(visited, w, x, y, true);
        q.Enqueue(new Point(x, y));
    }

    public static bool IsBackground(Color c)
    {
        int r = c.R, g = c.G, b = c.B;
        int mx = Math.Max(Math.Max(r, g), b);
        int mn = Math.Min(Math.Min(r, g), b);
        int sum = r + g + b;
        if (sum > 752) return true;
        if (sum > 736 && (mx - mn) < 22) return true;
        return false;
    }

    public static Bitmap Ensure32Argb(Bitmap src)
    {
        var bmp = new Bitmap(src.Width, src.Height, PixelFormat.Format32bppArgb);
        using (var g = Graphics.FromImage(bmp))
        {
            g.Clear(Color.Transparent);
            g.DrawImage(src, 0, 0, src.Width, src.Height);
        }
        return bmp;
    }

    public static void FloodFillEdgesTransparent(Bitmap bmp)
    {
        int w = bmp.Width;
        int h = bmp.Height;
        bool[] visited = new bool[w * h];
        var q = new Queue<Point>();

        for (int x = 0; x < w; x++)
        {
            TryEnqueue(bmp, visited, w, h, q, x, 0);
            TryEnqueue(bmp, visited, w, h, q, x, h - 1);
        }
        for (int y = 0; y < h; y++)
        {
            TryEnqueue(bmp, visited, w, h, q, 0, y);
            TryEnqueue(bmp, visited, w, h, q, w - 1, y);
        }

        while (q.Count > 0)
        {
            Point p = q.Dequeue();
            Color c = bmp.GetPixel(p.X, p.Y);
            bmp.SetPixel(p.X, p.Y, Color.FromArgb(0, c.R, c.G, c.B));

            TryEnqueue(bmp, visited, w, h, q, p.X - 1, p.Y);
            TryEnqueue(bmp, visited, w, h, q, p.X + 1, p.Y);
            TryEnqueue(bmp, visited, w, h, q, p.X, p.Y - 1);
            TryEnqueue(bmp, visited, w, h, q, p.X, p.Y + 1);
        }
    }

    /// <summary>
    /// Removes trapped white/anti-alias halos: pixels light enough to be fringe but blocked from the image edge
    /// by non-background neighbors become transparent when next to an already-transparent pixel.
    /// </summary>
    public static bool IsLightFringePixel(Color c)
    {
        if (c.A < 16)
            return false;
        int r = c.R;
        int g = c.G;
        int b = c.B;
        int sum = r + g + b;
        int mx = Math.Max(r, Math.Max(g, b));
        int mn = Math.Min(r, Math.Min(g, b));
        if (sum < 728)
            return false;
        if (mx - mn > 34)
            return false;
        if (sum >= 752)
            return true;
        return sum >= 728 && (mx - mn) <= 26;
    }

    private static bool HasTransparentNeighbor(Bitmap bmp, int x, int y, int w, int h)
    {
        for (int dy = -1; dy <= 1; dy++)
        {
            for (int dx = -1; dx <= 1; dx++)
            {
                if (dx == 0 && dy == 0)
                    continue;
                int nx = x + dx;
                int ny = y + dy;
                if (nx < 0 || ny < 0 || nx >= w || ny >= h)
                    continue;
                if (bmp.GetPixel(nx, ny).A < 16)
                    return true;
            }
        }
        return false;
    }

    /// <summary>Repeatedly clears light fringe pixels adjacent to transparency (eats halos inside disconnected pockets).</summary>
    public static void ExpandTransparencyIntoLightFringe(Bitmap bmp, int maxIterations)
    {
        int w = bmp.Width;
        int h = bmp.Height;
        for (int iter = 0; iter < maxIterations; iter++)
        {
            var clear = new List<Point>();
            for (int y = 0; y < h; y++)
            {
                for (int x = 0; x < w; x++)
                {
                    Color c = bmp.GetPixel(x, y);
                    if (c.A < 16)
                        continue;
                    if (!IsLightFringePixel(c))
                        continue;
                    if (!HasTransparentNeighbor(bmp, x, y, w, h))
                        continue;
                    clear.Add(new Point(x, y));
                }
            }
            if (clear.Count == 0)
                break;
            foreach (Point p in clear)
            {
                Color c = bmp.GetPixel(p.X, p.Y);
                bmp.SetPixel(p.X, p.Y, Color.FromArgb(0, c.R, c.G, c.B));
            }
        }
    }

    public static Bitmap ResizeMax(Bitmap src, int maxSide)
    {
        int w = src.Width, h = src.Height;
        double scale = Math.Min((double)maxSide / w, (double)maxSide / h);
        if (scale >= 1.0) scale = 1.0;
        int nw = Math.Max(1, (int)Math.Round(w * scale));
        int nh = Math.Max(1, (int)Math.Round(h * scale));
        var dst = new Bitmap(nw, nh, PixelFormat.Format32bppArgb);
        using (var g = Graphics.FromImage(dst))
        {
            g.InterpolationMode = InterpolationMode.HighQualityBicubic;
            g.SmoothingMode = SmoothingMode.HighQuality;
            g.CompositingQuality = CompositingQuality.HighQuality;
            g.DrawImage(src, 0, 0, nw, nh);
        }
        return dst;
    }

    /// <summary>Solid color splash with centered logo (for iOS asset PNGs).</summary>
    public static Bitmap ComposeSplash(Bitmap transparentLogo, int canvasSize, Color bg, int logoMaxSide)
    {
        using (Bitmap scaled = ResizeMax(transparentLogo, logoMaxSide))
        {
            ExpandTransparencyIntoLightFringe(scaled, 32);
            var canvas = new Bitmap(canvasSize, canvasSize, PixelFormat.Format32bppArgb);
            using (var g = Graphics.FromImage(canvas))
            {
                g.Clear(bg);
                int x = (canvasSize - scaled.Width) / 2;
                int y = (canvasSize - scaled.Height) / 2;
                g.DrawImage(scaled, x, y);
            }
            return canvas;
        }
    }
}
