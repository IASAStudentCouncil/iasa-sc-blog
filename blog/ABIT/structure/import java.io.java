import java.io.BufferedReader;
import java.io.FileReader;
import weka.classifiers.functions.LinearRegression;
import weka.core.Instance;
import weka.core.Instances;

public class Regression {
public static void main(String args[]) throws Exception {
Instances data = new Instances(new BufferedReader(new FileReader("winequality-red.arff")));
data.setClassIndex(data.numAttributes() - 1);
LinearRegression model = new LinearRegression();
model.buildClassifier(data);
System.out.println(model);
Instance quality = data.lastInstance();
int pred_q = model.classifyInstance(quality);
System.out.println("Quality ("+quality+"): "+ pred_q);
}
}
