using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class mainMenuButtons : MonoBehaviour {

	// Use this for initialization
    public void Help_Button_Click()
    {
        SceneManager.LoadScene("Help");
    }

    public void Disclaimer_No_Continue_Button_Click()
    {
        SceneManager.LoadScene("Disclaimer_No_Continue");
    }

    public void Disclaimer_Continue_Button_Click()
    {
        SceneManager.LoadScene("Disclaimer_Continue");
    }

    public void Instructions_Button_Click()
    {
        SceneManager.LoadScene("Instructions");
    }

    public void Start_Button_Click()
    {
        SceneManager.LoadScene("Start");
    }

    public void Past_Results_Button_Click()
    {
        SceneManager.LoadScene("PastResults");
    }
}
