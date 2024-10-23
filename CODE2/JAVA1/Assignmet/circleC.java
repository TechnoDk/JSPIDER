import java.util.Scanner;
import java.lang.reflect.Constructor;
import java.math.*;

public class circleC {
    double radius;
    //  Constructor is used but we can use method  just use in circle file 
    circleC(double radius) {
        this.radius = radius;

    }

    public void getDetails() {
        System.out.println("+--------+----------+-----------+");
        System.out.println("Radius is :- " + radius);
        System.out.println("Area is:- " + Math.PI * (radius * radius));
        System.out.println("Parameter is :- " + 2 * Math.PI * radius);
        System.out.println("+---------+--------+-----------+");
    }
}
