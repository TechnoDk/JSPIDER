public class method1 {

    public static int addTwoNumber(int a, int b) {
        System.out.println("Addition of Two Numer");
        return a + b;
    };

    public static int subtractTwoNum(int a, int b) {
        System.out.println("Subtraction of Two Number");
        return a - b;
    }

    public static int multiplyTwoNum(int a, int b) {
        System.out.println("Multiply Two Number");
        return a * b;
    }

    public static int divideTwoNum(int a, int b) {
        System.out.println("Divide Two Number");
        return a / b;
    }

    public static void main(String[] args) {
        int a = 56;
        int b = 46;
        System.out.println(addTwoNumber(a, b));
        System.out.println(subtractTwoNum(a, b));
        System.out.println(multiplyTwoNum(a, b));
        System.out.println(divideTwoNum(a, b));
    }
}
