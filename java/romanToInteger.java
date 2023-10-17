public class RomanToInteger {
    public static void main(String[] args) {
        String romanNumeral = "XC";
        int result = romanToInteger(romanNumeral);
        System.out.println("Equivalent integer value: " + result);
    }

    public static int romanToInteger(String s) {
        int result = 0;
        String romanNumerals = "IVXLCDM";
        int[] values = {1, 5, 10, 50, 100, 500, 1000};
        int prevValue = 0;
        for (int i = s.length() - 1; i >= 0; i--) {
            char currentSymbol = s.charAt(i);
            int index = romanNumerals.indexOf(currentSymbol);
            int currentValue = values[index];
            if (currentValue < prevValue) {
                result -= currentValue;
            } else {
                result += currentValue;
            }
            prevValue = currentValue;
        }
        return result;
    }
}
