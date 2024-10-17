import java.util.Scanner;

public class method5 {

    public static int threeInput(int x, int y, int z) {
        int a = (x < y && x < z ? x : y < x && y < z ? y : z);
        // System.out.println(a);
        return a;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("First number");
        int var1 = sc.nextInt();
        System.out.println("second Number");
        int var2 = sc.nextInt();
        System.out.println("Third number");
        int var3 = sc.nextInt();
        System.out.println("Smaller than among three number:");
        System.out.println(threeInput(var1, var2, var3));
    }
}
