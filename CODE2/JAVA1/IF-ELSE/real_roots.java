import java.util.Scanner;
public class real_roots {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Input coefficients a, b, and c
        System.out.print("Enter coefficient a: ");
        double a = scanner.nextDouble();

        System.out.print("Enter coefficient b: ");
        double b = scanner.nextDouble();

        System.out.print("Enter coefficient c: ");
        double c = scanner.nextDouble();

        // Calculate the discriminant
        double discriminant = b * b - 4 * a * c;

        // Check the discriminant to determine the nature of the roots
        if (discriminant > 0) {
            // Two real and distinct roots
            double root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            double root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            System.out.println("The equation has two real roots: " + root1 + " and " + root2);
        } else if (discriminant == 0) {
            // One real root (repeated root)
            double root = -b / (2 * a);
            System.out.println("The equation has one real root: " + root);
        } else {
            // No real roots
            System.out.println("The equation has no real roots.");
        }

    
    }
}
