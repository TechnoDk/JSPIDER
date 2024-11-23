public class ArmstrongRange3 {
    public static void main(String[] args) {
        System.out.println("Armstrong numbers between 1 and 100 are:");
        int count = 0;

        for (int num = 1; num <= 100; num++) {
            if (isArmstrong(num)) {
                System.out.print(num + " ");
                count++;
            }
        }

        System.out.println("\nTotal Armstrong numbers up to 100: " + count);
    }

    // Function to check if a number is an Armstrong number
    public static boolean isArmstrong(int number) {
        int originalNumber = number;
        int sum = 0;

        while (number > 0) {
            int digit = number % 10;
            sum += digit * digit * digit;
            number /= 10;
        }

        return sum == originalNumber;
    }
}
