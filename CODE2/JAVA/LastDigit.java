public class LastDigit {

    public static void main(String[] args) {
        System.out.println("This is Program4");
        int x = 11;

        int temp = LastDigit1(x);
        System.out.println(temp);

    }

    // 1.
    public static int LastDigit1(int x) {
        System.out.println("This is LastDigit method");
        int digit = x % 10;
        return digit;
    }
    // 2.

    // public static int digitSquare(int x) {
    // int digit = x%10;
    // return digit*digit;
    // }
    // 3.
    // public static int bigNumber (int x,int y)
    // {
    // if(x>y)
    // return x;
    // else
    // return y;
    // }
}
