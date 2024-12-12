import java.util.Scanner;

public class equilateral {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Input sides of the triangle
        System.out.print("Enter side 1: ");
        int side1 = scanner.nextInt();

        System.out.print("Enter side 2: ");
        int side2 = scanner.nextInt();

        System.out.print("Enter side 3: ");
        int side3 = scanner.nextInt();

        // Check if it's a valid triangle
        if (isValidTriangle(side1, side2, side3)) {
            if (side1 == side2 && side2 == side3) {
                System.out.println("The triangle is equilateral.");
            } else if (side1 == side2 || side2 == side3 || side1 == side3) {
                System.out.println("The triangle is isosceles.");
            } else {
                System.out.println("The triangle is scalene.");
            }
        } else {
            System.out.println("The given sides do not form a valid triangle.");
        }

    
    }

    // Method to check if the sides form a valid triangle
    public static boolean isValidTriangle(int a, int b, int c) {
        return (a + b > c) && (a + c > b) && (b + c > a);
    }
}
