//tip calculator application

//tip calculator application in android studio

package com.example.tipcalc

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import com.example.tipcalc.ui.theme.TipCalcTheme

class MainActivity : ComponentActivity(){
    override fun onCreate(savedInstanceState:Bundle?){
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent{
            CalculateTip()
        }
    }
}

@Composable
fun CalculateTip(){
    Column (modifier=Modifier.fillMaxSize(),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally)
    {
        var amount by remember{ mutableStateOf("") }
        var percentage by remember{ mutableStateOf("") }
        var tipAmount by remember{mutableStateOf(0.0)}
        TextField(value=amount,onValueChange={amount=it}, label = {Text("enter the amount")})
        TextField(value=percentage, onValueChange = {percentage=it}, label = {Text("Enter the percentage")})
        Button(onClick = {
            var amt=amount.toDoubleOrNull()?:0.0
            var per=percentage.toDoubleOrNull()?:0.0
            tipAmount=amt*(per/100)
        }){
            Text("click to calculate tip Amount")
        }
        if(tipAmount!=0.0)
        Text("totalAmount is:$tipAmount")

    }
}


