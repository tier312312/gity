public class MaximumNumber {
    public static void main(String[] args) {
        int num1 = 10, num2 = 20, num3 = 15;
        int max = num1;
        if (num2 > max) {
            max = num2;
        }
        if (num3 > max) {
            max = num3;
        }
        System.out.println("Maximum number: " + max);
    }
}
