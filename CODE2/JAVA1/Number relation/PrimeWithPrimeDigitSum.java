import java.util.Scanner;

public class PrimeWithPrimeDigitSum {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Input the range
        System.out.print("Enter the lower bound of the range: ");
        int lower = sc.nextInt();
        System.out.print("Enter the upper bound of the range: ");
        int upper = sc.nextInt();

        int count = 0;

        System.out.println("Prime numbers in the range with prime digit sum are:");
        for (int num = lower; num <= upper; num++) {
            if (isPrime(num) && isPrime(sumOfDigits(num))) {
                System.out.print(num + " ");
                count++;
            }
        }

        System.out.println("\nTotal prime numbers with prime digit sum: " + count);
    }

    // Function to check if a number is prime
    public static boolean isPrime(int number) {
        if (number < 2)
            return false; // Numbers less than 2 are not prime
        for (int i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0)
                return false;
        }
        return true;
    }

    // Function to calculate the sum of digits of a number
    public static int sumOfDigits(int number) {
        int sum = 0;
        while (number > 0) {
            sum += number % 10;
            number /= 10;
        }
        return sum;
    }
}
