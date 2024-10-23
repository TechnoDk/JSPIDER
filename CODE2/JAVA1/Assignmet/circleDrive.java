public class circleDrive {

    public static void main(String[] args) {

        circle c1 = new circle();
        System.out.println("Enter Radius 1 :- ");

        circle c2 = new circle();
        System.out.println("Enter Radius 2:- ");

        circle c3 = new circle();
        System.out.println("Enter Radius 3 :- ");

        circle c4 = new circle();
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
