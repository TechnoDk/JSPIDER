public class rectangleDrive {
    public static void main(String[] args) {
        rectangle r1 = new rectangle();
        rectangle r2 = new rectangle();
        rectangle r3 = new rectangle();

        r1.setValue(12, 10);
        System.out.println(r1);
        r1.getDetails();
        r2.setValue(15, 10);
        System.out.println(r2);
        r2.getDetails();
        r3.setValue(16, 10);
        System.out.println(r3);
        r3.getDetails();

    }
}
