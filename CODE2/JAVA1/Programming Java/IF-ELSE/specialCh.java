import java.util.Scanner;
public class specialCh {
     public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Your Alphabet");
        char alphabet = sc.next().charAt(0);
        if (alphabet >= 'a' && alphabet <= 'z') {
            System.out.println(alphabet + " It is Lower case character");

        } else if (alphabet >= 'A' && alphabet <= 'Z') {
            System.out.println(alphabet + " It is an Uppercase Character");

        } else if ( alphabet>='0' && alphabet <='9') {
            System.out.println(alphabet+ " It is digit.");
        }
        else {
            System.out.println(alphabet + " It is a special character");
        }

    }
}
