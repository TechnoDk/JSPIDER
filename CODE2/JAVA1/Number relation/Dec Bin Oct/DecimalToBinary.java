import java.util.Scanner;

class DecimalToBinary {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("ENter the Number: ");
        int n = sc.nextInt();
        String binary = convertDecimalToBinary(n);
        System.out.println("Binary of " + n + " is: " + binary);
    }

    public static String convertDecimalToBinary(int n) {
        String bin = "";
        while (n > 0) {
            int rem = n % 2;
            bin = rem + bin;
            n = n / 2;
        }
        return bin;
    }
}
