import java.util.Scanner;

public class AlphabetCheck {
    public static void main(String[] args) {
         
        Scanner scanner = new Scanner(System.in);

         
        System.out.print("Enter a character: ");
        char ch = scanner.next().charAt(0); // Reading a single character

         
        String result = ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z'))
                ? "The character is an alphabet."
                : "The character is not an alphabet.";

    
        System.out.println(result);

        
    }
}
