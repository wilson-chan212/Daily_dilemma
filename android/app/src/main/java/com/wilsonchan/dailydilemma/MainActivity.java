package com.wilsonchan.dailydilemma;

import android.graphics.Color;
import android.os.Bundle;
import android.webkit.WebView;

import androidx.core.splashscreen.SplashScreen;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

  private static final int WEBVIEW_BG = Color.parseColor("#f5f4f0");

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen splashScreen = SplashScreen.installSplashScreen(this);
    splashScreen.setKeepOnScreenCondition(() -> false);
    super.onCreate(savedInstanceState);

    getWindow().getDecorView().setBackgroundColor(WEBVIEW_BG);

    WebView wv = getBridge() != null ? getBridge().getWebView() : null;
    if (wv == null) {
      wv = findViewById(com.getcapacitor.android.R.id.webview);
    }
    if (wv != null) {
      wv.setBackgroundColor(WEBVIEW_BG);
    }
  }
}
