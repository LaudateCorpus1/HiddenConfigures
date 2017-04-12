using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class disclaimerButtons : MonoBehaviour {

    public void Instructions_Button_Click()
    {
        SceneManager.LoadScene("Instructions_Continue");
    }

}
