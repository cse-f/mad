//affirmation
//first import images into drawable folder

package com.example.affirmation

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.Card
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp



class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            AffirmationApp()
        }
    }
}

data class Affirmation(val id:Int,val text:String)

@Composable
fun AffirmationApp(){
    var ImagesList = listOf(
        Affirmation(R.drawable.one, "one"),
        Affirmation(R.drawable.two, "one"),
        Affirmation(R.drawable.three, "one"),
        Affirmation(R.drawable.four, "one"),
        Affirmation(R.drawable.five, "one"),
        Affirmation(R.drawable.six, "one")
    )
    LazyColumn (verticalArrangement = Arrangement.spacedBy(8.dp)){

        items(ImagesList){
            affirmation-> AffirmationCard(affirmation)
        }
    }
}

@Composable
fun AffirmationCard(affirmation: Affirmation) {
    Card{
        Column{
            Image(painter = painterResource(affirmation.id), contentDescription = affirmation.text,modifier=Modifier.fillMaxSize().height(200.dp))
            Text(affirmation.text)
        }
    }
}
