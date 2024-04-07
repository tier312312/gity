public class SumOfOddNumbers {
    public static void main(String[] args) {
        int start = 1, end = 10;
        int sum = 0;
        for (int i = start; i <= end; i++) {
            if (i % 2 != 0) {
                sum += i;
            }
        }
        System.out.println("Sum of odd numbers: " + sum);
    }
}
