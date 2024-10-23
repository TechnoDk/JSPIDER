public class circleDriveC {

    public static void main(String[] args) {

        circleC c1 = new circleC();
        System.out.println("Enter Radius 1 :- ");

        circleC c2 = new circleC();
        System.out.println("Enter Radius 2:- ");

        circleC c3 = new circleC();
        System.out.println("Enter Radius 3 :- ");

        circleC c4 = new circleC();
        System.out.println("Enter Radius 4:- ");
        c1.setValue();
        c2.setValue();
        c3.setValue();
        c4.setValue();

        c1.getDetails();
        c2.getDetails();
        c3.getDetails();
        c4.getDetails();
    }
}
