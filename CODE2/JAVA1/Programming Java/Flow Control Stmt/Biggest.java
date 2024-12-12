import java.util.Scanner;

class Biggest {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the 1st Number: ");
        int a = sc.nextInt();
        System.out.println("Enter the 2nd Number: ");
        int b = sc.nextInt();
        System.out.println("Enter the 3rd Number: ");
        int c = sc.nextInt();
        if (a == b && a == c)
            System.out.println("All Are Equal");
        else if (a > b && a > c)
            System.out.println("Biggest value is: " + a);
        else if (b > c)
            System.out.println("Biggest value is: " + b);
        else
            System.out.println("Biggest value is: " + c);
        System.out.println("=====Program Ends=====");

    }
}
