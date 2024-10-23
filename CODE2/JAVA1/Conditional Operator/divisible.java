import java.util.Scanner;
public class divisible {
    

    public static void main(String[] args) {
        
        int a;
        
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Number");
        a = sc.nextInt();
        int c = ((a % 5 == 0) && (a % 11 == 0)) ? 1 :0;
        System.out.println(c);
    }
}
