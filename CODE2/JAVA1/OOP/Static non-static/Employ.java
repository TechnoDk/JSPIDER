// package OOP.Static non-static;

class Employ {
    static int x = 20;
    int a = 30;

    public static void test() {
        System.out.println("static test method");
        System.out.println("x is: " + x);
        demo();
        Employ e1 = new Employ();
        System.out.println("a is: " + e1.a);
        e1.drive();
    }

    public static void demo() {
        System.out.println("static demo method");

    }

    public void start() {
        System.out.println("non-static start method");
        System.out.println("a is: " + a);
        drive();
        System.out.println("x is: " + x);
        demo();
    }

    public void drive() {
        System.out.println("non-static drive method");
    }

    public static void main(String[] args) {
        System.out.println("Main method starts");
        test();
        System.out.println("==================");
        Employ e1 = new Employ();
        e1.start();

    }

}