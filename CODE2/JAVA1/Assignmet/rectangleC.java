public class rectangleC {

    double length;
    double width;

    rectangleC(double length, double width) {
        this.length = length;
        this.width = width;

    }

    public void getDetails() {
        System.out.println("_________________________________");
        System.out.println("Length is :- " + length);
        System.out.println("Width is :- " + width);
        System.out.println("Area is:- " + (length * width));
        System.out.println("Parameter is :- " + (2 * (length + width)));
        System.out.println("**************************");
    }
}
