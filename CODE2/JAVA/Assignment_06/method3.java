public class method3 {
    public static int square(int a, int b) {
        if (a > b) {
            // System.out.println(a * a);
return  a*a;
        } else if (b > a) {
            // System.out.println(b * b);
return b*b;

        } else {
            System.out.println("invalid");
        }
        return 0;
    }

    public static void main(String[] args) {
        int a = 12;
        int b = 20;
        System.out.println("start main method");
        System.out.println(square(a, b));
    }
}
