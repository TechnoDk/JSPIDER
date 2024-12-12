import java.util.Scanner;

public class Triagle {
    public static void main(String[] args) {
       
        Scanner scanner = new Scanner(System.in);

         
        System.out.print("Enter the first side: ");
        int side1 = scanner.nextInt();

        System.out.print("Enter the second side: ");
        int side2 = scanner.nextInt();

        System.out.print("Enter the third side: ");
        int side3 = scanner.nextInt();

         String result = (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1)
                ? "Valid Triangle"
                : "Invalid Triangle";

         
        System.out.println("The triangle is: " + result);
    }
}
