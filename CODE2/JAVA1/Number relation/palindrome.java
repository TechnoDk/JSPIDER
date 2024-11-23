import java.util.Scanner;

public class palindrome {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the num:- ");
        int n = sc.nextInt();
        int rev = 0;
        int OriginalNum = n;

        while (n > 0) {
            int rem = n % 10;
            rev = 10 * rev + rem;

            n = n / 10;

        }
        if (rev == OriginalNum)
            System.out.println(OriginalNum + " is a palindrome Num ");
        else
            System.out.println(OriginalNum + " is not a palindrome Num");
    }
}
