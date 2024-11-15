//activity life cycle methods
//to see logs go to LogCat in android studio (bottom left corner)
//in filter search '  System.out  ',this will fetch all the logs related to println

package com.example.activitylifecycle

import android.os.Bundle
import android.widget.Toast
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import com.example.activitylifecycle.ui.theme.ActivityLifeCycleTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        println("oncreate");
    }

    override fun onStart() {
        super.onStart()
        println("onStart");
    }

    override fun onResume() {
        super.onResume()
        println("onResume")
    }

    override fun onPause() {
        super.onPause()
        println("onpause")
    }

    override fun onStop() {
        super.onStop()
        println("onstop")
    }

    override fun onRestart() {
        super.onRestart()
        println("onRestart")
    }

    override fun onDestroy() {
        super.onDestroy()
        println("onDestroy")
    }
}



