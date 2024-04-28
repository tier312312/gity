public class GCD {
    public static void main(String[] args) {
        int num1 = 12, num2 = 18, gcd = 1;
        for (int i = 1; i <= num1 && i <= num2; ++i) {
            if (num1 % i == 0 && num2 % i == 0)
                gcd = i;
        }
        System.out.println("Greatest Common Divisor of " + num1 + " and " + num2 + " = " + gcd);
    }
}
