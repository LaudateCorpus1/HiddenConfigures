using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class pastResultsRead : MonoBehaviour {

    public void UpdateScores()
    {
        string fileName = "Assets/Resources/highscores.csv";
        if (new FileInfo("Assets/Resources/highscores.csv").Length != 0)
        {
            using (StreamReader reader = new StreamReader(fileName))
            {
                string line;

                while ((line = reader.ReadLine()) != null)
                {
                    //Define pattern
                    Regex CSVParser = new Regex(",(?=(?:[^\"]*\"[^\"]*\")*(?![^\"]*\"))");

                    //Separating columns to array
                    string[] X = CSVParser.Split(line);
                    List<int> lst = new List<int>();
                    for (int i = 0; i < X.Length; i++)
                    {
                        lst.Add(Int32.Parse(X[i]));
                    }
                    lst.Sort();
                    lst.Reverse();
                    displayScores(lst);
                }
            }
        }
        else
        {
            List<int> lst = new List<int>();
            displayScores(lst);
            noScores.SetActive(true);
        }

    }

    void displayScores(List<int> X)
    {
        if (0 == X.Count)
        {
            noScores.SetActive(true);
        }
        if (0 < X.Count)
        {
            high1.GetComponent<Text>().text += X[0];
            high1.SetActive(true);
        }
        if (1 < X.Count)
        {
            high2.GetComponent<Text>().text += X[1];
            high2.SetActive(true);
        }
        if (2 < X.Count)
        {
            high3.GetComponent<Text>().text += X[2];
            high3.SetActive(true);
        }
        if (3 < X.Count)
        {
            high4.GetComponent<Text>().text += X[3];
            high4.SetActive(true);
        }
        if (4 < X.Count)
        {
            high5.GetComponent<Text>().text += X[4];
            high5.SetActive(true);
        }

    }


}
public class ReverseSort : IComparer
{
    public int Compare(object x, object y)
    {
        // reverse the arguments
        return Comparer.Default.Compare(y, x);
    }
}
