//fragments in android studio

package com.example.fragments

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.core.view.WindowInsetsAnimationCompat.Callback
import androidx.navigation.NavController
import androidx.navigation.NavHost
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import com.example.fragments.ui.theme.FragmentsTheme

class MainActivity:ComponentActivity(){
    override fun onCreate(savedInstanceState:Bundle?){
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent{
            CallFragments();
        }
    }
}

@Composable
fun CallFragments(){
    Column(modifier=Modifier.fillMaxSize(),
        verticalArrangement=Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally){
        var navController = rememberNavController()
        NavHost(navController=navController, startDestination = "fragment1"){
            composable("fragment1"){fragment1(navController)}
            composable("fragment2"){fragment2(navController)}
        }

    }

}
@Composable
fun fragment1(navController : NavController){
    Column(modifier=Modifier.fillMaxSize(),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally){
        Text("This is fragment 1")
        Button(onClick = {
            navController.navigate("fragment2")
        }){
            Text("Go to fragment 2")
        }
    }
}

@Composable
fun fragment2(navController : NavController){
    Column(modifier=Modifier.fillMaxSize(),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally){
        Text("This is fragment 2")
        Button(onClick = {
            navController.navigate("fragment1")
        }){
            Text("Go to fragment 1")
        }

    }

}

