import java.util.Scanner;

public class PerfectNumberDoWhile {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        char ch;

        do {
            // Prompt the user to enter a number
            System.out.print("Enter a number :  ");
            int number = scanner.nextInt();

            // Check if the number is perfect
            if (isPerfectNumber(number)) {
                System.out.println(number + " is a perfect number!");
            } else {
                System.out.println(number + " is not a perfect number.");
            }

             
            System.out.print("Do you want to check another number? (Y/y): ");
            ch = scanner.next().charAt(0);

        } while (ch == 'Y' || ch == 'y');

             }

    // Method to check if a number is a perfect number
    public static boolean isPerfectNumber(int number) {
        int sum = 0;

        // Find all divisors of the number (excluding itself)
        for (int i = 1; i <= number / 2; i++) {
            if (number % i == 0) {
                sum += i;
            }
        }

        // A number is perfect if the sum of its divisors equals the number
        return sum == number;
    }
}
