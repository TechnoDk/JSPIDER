public class method2 {
    public static int sumTwoNum(int num, int num1) {

        int l = (num * num);
        int s = (num1 * num1);
        System.out.println("Addition of two number For getting Square");
        int m = l + s;
        return m;
    }

    public static void main(String[] args) {
        int n = 45364;

        int num = n % 10;
        int num2 = n / 10;
        int num1 = num2 % 10;
        System.out.println("Getting  last digit number");
        System.out.println(num);
        System.out.println(num1);
        System.out.println(sumTwoNum(num, num1));

    }
}
