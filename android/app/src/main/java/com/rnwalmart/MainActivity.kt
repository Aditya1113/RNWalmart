package com.rnwalmart

import android.os.Bundle
import com.facebook.react.ReactActivity
import org.devio.rn.splashscreen.SplashScreen

class MainActivity : ReactActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        SplashScreen.show(this)
        super.onCreate(savedInstanceState)


    }

    // ... (other methods if needed)
}
