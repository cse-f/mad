//dwelling_class hierarchy

import kotlin.math.PI
import kotlin.math.sqrt

fun main() {
 val squareCabin = SquareCabin(6, 50.0)
 val roundHut = RoundHut(6, 10.0)
 val roundTower = RoundTower(6, 15.5)

 println("\nSquare Cabin\n============")
 squareCabin.printDetails()

 println("\nRound Hut\n=========")
 roundHut.printDetails()
 println("Has room? ${roundHut.hasRoom()}")
 roundHut.getRoom()
 println("Has room? ${roundHut.hasRoom()}")
 println("Carpet size: ${roundHut.calculateMaxCarpetLength()}")

 println("\nRound Tower\n==========")
 roundTower.printDetails()
 println("Carpet Length: ${roundTower.calculateMaxCarpetLength()}")
}

// Base class for all dwellings
abstract class Dwelling(private var residents: Int) {
 abstract val buildingMaterial: String
 abstract val capacity: Int

 abstract fun floorArea(): Double

 fun hasRoom(): Boolean = residents < capacity

 fun getRoom() {
  if (hasRoom()) {
   residents++
   println("You got a room!")
  } else {
   println("Sorry, no rooms left.")
  }
 }

 fun printDetails() {
  println("Material: $buildingMaterial")
  println("Capacity: $capacity")
  println("Floor area: ${floorArea()}")
 }
}

// SquareCabin subclass
class SquareCabin(residents: Int, val length: Double) : Dwelling(residents) {
 override val buildingMaterial = "Wood"
 override val capacity = 6

 override fun floorArea(): Double = length * length
}

// RoundHut subclass
open class RoundHut(residents: Int, val radius: Double) : Dwelling(residents) {
 override val buildingMaterial = "Straw"
 override val capacity = 4

 override fun floorArea(): Double = PI * radius * radius

fun calculateMaxCarpetLength(): Double = sqrt(2.0) * radius
}

// RoundTower subclass
class RoundTower(residents: Int, radius: Double, val floors: Int = 2) : RoundHut(residents, radius) {
override val buildingMaterial = "Stone"
override val capacity = floors * 4

override fun floorArea(): Double = super.floorArea() * floors
}
