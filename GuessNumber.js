//GuessNumber

fun main(){
    var k=(1..100).random()
    var a=0
    while(true){
        print("Enter number:")
        a=readLine()!!.toInt()

        if(a==k){
            println("correct")
            break
        }
        else if(a>k)println("it is greater");
        else println("it is less")
        
    }
}
