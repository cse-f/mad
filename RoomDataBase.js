//room database
//1...MainActivity
class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            val database = UserDatabase.getInstance(this)
            InsertRecord(database)
        }
    }
}
@Composable
fun InsertRecord(database: UserDatabase) {
    val context = LocalContext.current

    val userDao = database.userDAO()
    var name by remember { mutableStateOf("") }
    var phone by remember { mutableStateOf("") }
    val scope = rememberCoroutineScope()

    // State to track if the record is inserted
    var isInserted by remember { mutableStateOf(false) }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Top
    ) {
        Text(text = "Enter Your Details")
        OutlinedTextField(
            value = name,
            onValueChange = { name = it },
            label = { Text("Enter Your Name") },
            modifier = Modifier.fillMaxWidth()
        )
        OutlinedTextField(
            value = phone,
            onValueChange = { phone = it },
            label = { Text("Enter Your Phone Number") },
            modifier = Modifier.fillMaxWidth()
        )


        Button(onClick = {
            // Launch coroutine to insert record
            scope.launch(Dispatchers.IO) {
                userDao.insert(User(userName = name, userPhone = phone))
            }
            isInserted = true // Mark as inserted after coroutine triggers

            Toast.makeText(context, "Record Inserted Successfully", Toast.LENGTH_LONG).show()
        }) {
            Text(text = "Insert Now")
        }

        // Display records only after insertion
        if (isInserted) {
            DisplayRecords(database)
        }
    }
}

@Composable
fun DisplayRecords(database: UserDatabase) {
    val userDao = database.userDAO()
    val userList = remember { mutableStateOf(listOf<User>()) }
    val scope = rememberCoroutineScope()

    LaunchedEffect(Unit) {
        scope.launch(Dispatchers.IO) {
            userList.value = userDao.getAllUsers() // Fetch all users after insertion
        }
    }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp)
    ) {
        Text(text = "Stored Records")
        Spacer(modifier = Modifier.height(16.dp))

        userList.value.forEach { user ->
            Text(text = "Name: ${user.userName}, Phone: ${user.userPhone}")
            Spacer(modifier = Modifier.height(8.dp))
        }
    }
}

//2...User.kt(data Class)
package com.example.roomdatabase

import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity(tableName = "User")
data class User(
    @PrimaryKey(autoGenerate = true)
    val uid:Int?=null,
    val userName:String,
    val userPhone:String
)

//3...UserDAO.kt(interface)
  package com.example.roomdatabase

import androidx.room.Dao
import androidx.room.Insert
import androidx.room.Query

@Dao
interface UserDAO {
    @Insert
    suspend fun insert(user: User)

    @Query("SELECT * FROM User")
    suspend fun getAllUsers(): List<User>
}


//4.....UserDatabase.kt(normal class)
package com.example.roomdatabase

import android.content.Context
import androidx.room.Database
import androidx.room.Room
import androidx.room.RoomDatabase

@Database(entities = [User::class], version = 1)
abstract class UserDatabase : RoomDatabase() {
    abstract fun userDAO():UserDAO

    companion object{

        @Volatile
        private var INSTANCE:UserDatabase?=null

        fun getInstance(context: Context):UserDatabase{
            return INSTANCE ?: synchronized(this){
                val instance = Room.databaseBuilder(
                    context.applicationContext,
                    UserDatabase::class.java,
                    "ashwin_database"
                ).build()
                INSTANCE=instance
                instance

            }
        }

    }
}

step-2...edit gradle file..second file in gradle scripts
//in plugin add this line
kotlin("kapt")
//in dependencies add these lines
"""

val room_version = "2.6.1"
implementation("androidx.room:room-runtime:$room_version")
annotationProcessor("androidx.room:room-compiler:$room_version")
kapt("androidx.room:room-compiler:$room_version")
implementation("androidx.room:room-ktx:$room_version")

"""
