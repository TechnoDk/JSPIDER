import java.util.Scanner;
public class vowel {
    
public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter an alphabet:");
    char ch = sc.next().charAt(0);
    ch = Character.toLowerCase(ch);

    String result = (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') ? "Vowel" : "Not a Vowel";
    System.out.println(result);
}
}
