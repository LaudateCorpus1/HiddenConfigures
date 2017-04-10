package wumbo.quizapp;

import android.content.Intent;
import android.support.annotation.StringDef;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {

    public static final String TEST_MESSAGE = "wumbo.quizapp.MESSAGE";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void startQuiz(View view){
        Intent intent = new Intent(this,FirstQuizPage.class);

        intent.putExtra(TEST_MESSAGE,"We made it");
        startActivity(intent);
    }
}
