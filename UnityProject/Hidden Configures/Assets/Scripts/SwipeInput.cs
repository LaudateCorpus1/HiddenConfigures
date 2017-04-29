using System.Collections;
using UnityEngine;
using UnityEngine.SceneManagement;

public class SwipeInput : MonoBehaviour
{
    Vector3 startPos;
    Vector3 endPos;

    public float maxTime;
    public float minSwipeDist;

    float startTime;
    float endTime;

    public int counter = 10;

    float swipeDistance;
    float swipeTime;

    public GameObject t1;
    public GameObject t2;
    public GameObject t3;
    public GameObject t4;
    public GameObject t5;
    public GameObject t6;
    public GameObject t7;
    public GameObject t8;
    public GameObject t9;
    public GameObject t10;
    public GameObject errorText;

    // 0 = left
    // 1 = right
    void removeNext(int direction)
    {
        Scene currentScene = SceneManager.GetActiveScene();
        errorText.SetActive(false);
        if (counter == 10)
        {

            GameObject term = GameObject.Find("Term 10");
            SwipeWord swipeWord = term.GetComponent<SwipeWord>();
            if (direction == swipeWord.direction)
            {
                errorText.SetActive(false);
                t10.gameObject.SetActive(false);
                counter--;
            }
            else
            {
                errorText.SetActive(true);

                //StartCoroutine(SwipeError());
            }
        }
        else if (counter == 9)
        {
            GameObject term = GameObject.Find("Term 9");
            SwipeWord swipeWord = term.GetComponent<SwipeWord>();
            if (direction == swipeWord.direction)
            {
                t9.gameObject.SetActive(false);
                counter--;
            }
            else
            {
                errorText.SetActive(true);

                //StartCoroutine(SwipeError());
            }
        }
        else if (counter == 8)
        {
            GameObject term = GameObject.Find("Term 8");
            SwipeWord swipeWord = term.GetComponent<SwipeWord>();
            if (direction == swipeWord.direction)
            {
                t8.gameObject.SetActive(false);
                counter--;
            }
            else
            {
                errorText.SetActive(true);

                //StartCoroutine(SwipeError());
            }
        }
        else if (counter == 7)
        {
            GameObject term = GameObject.Find("Term 7");
            SwipeWord swipeWord = term.GetComponent<SwipeWord>();
            if (direction == swipeWord.direction)
            {
                t7.gameObject.SetActive(false);
                counter--;
            }
            else
            {
                errorText.SetActive(true);

                //StartCoroutine(SwipeError());
            }
        }
        else if (counter == 6)
        {
            GameObject term = GameObject.Find("Term 6");
            SwipeWord swipeWord = term.GetComponent<SwipeWord>();
            if (direction == swipeWord.direction)
            {
                t6.gameObject.SetActive(false);
                counter--;
            }
            else
            {
                errorText.SetActive(true);

                //StartCoroutine(SwipeError());
            }
        }
        else if (counter == 5)
        {
            GameObject term = GameObject.Find("Term 5");
            SwipeWord swipeWord = term.GetComponent<SwipeWord>();
            if (direction == swipeWord.direction)
            {
                t5.gameObject.SetActive(false);
                counter--;
            }
            else
            {
                errorText.SetActive(true);

                //StartCoroutine(SwipeError());
            }
        }
        else if (counter == 4)
        {
            GameObject term = GameObject.Find("Term 4");
            SwipeWord swipeWord = term.GetComponent<SwipeWord>();
            if (direction == swipeWord.direction)
            {
                t4.gameObject.SetActive(false);
                counter--;
            }
            else
            {
                errorText.SetActive(true);

                //StartCoroutine(SwipeError());
            }
        }
        else if (counter == 3)
        {
            GameObject term = GameObject.Find("Term 3");
            SwipeWord swipeWord = term.GetComponent<SwipeWord>();
            if (direction == swipeWord.direction)
            {
                t3.gameObject.SetActive(false);
                counter--;
            }
            else
            {
                errorText.SetActive(true);

                //StartCoroutine(SwipeError());
            }
        }
        else if (counter == 2)
        {
            GameObject term = GameObject.Find("Term 2");
            SwipeWord swipeWord = term.GetComponent<SwipeWord>();
            if (direction == swipeWord.direction)
            {
                t2.gameObject.SetActive(false);
                counter--;
            }
            else
            {
                errorText.SetActive(true);

                //StartCoroutine(SwipeError());
            }
        }
        else if (counter == 1)
        {
            GameObject term = GameObject.Find("Term 1");
            SwipeWord swipeWord = term.GetComponent<SwipeWord>();
            if (direction == swipeWord.direction)
            {
                t1.gameObject.SetActive(false);
                string sceneName = currentScene.name;
                if (sceneName == "Phase_2_Start")
                {
                    SceneManager.LoadScene("Results");
                }
                else if (sceneName == "Phase_1_Start")
                {
                    SceneManager.LoadScene("Phase_2_Transition");
                }
            }
            else
            {
                errorText.SetActive(true);

                //StartCoroutine(SwipeError());
            }

        }
    }

    IEnumerator SwipeError()
    {
        errorText.SetActive(true);
        yield return new WaitForSeconds(5);
        errorText.SetActive(false);
    }

    void Update()
    {
        if(Input.touchCount > 0)
        {
            Touch touch = Input.GetTouch(0);
            if(touch.phase == TouchPhase.Began)
            {
                startTime = Time.time;
                startPos = touch.position;
            }
            else if (touch.phase == TouchPhase.Ended)
            {
                endTime = Time.time;
                endPos = touch.position;

                swipeDistance = (endPos - startPos).magnitude;
                swipeTime = endTime - startTime;

                if(swipeTime < maxTime && swipeDistance > minSwipeDist)
                {
                    swipe();
                }
            }
        }
    }

    void swipe()
    {
        Vector2 distance = endPos - startPos;
        if(Mathf.Abs(distance.x) > Mathf.Abs(distance.y))
        {
            Debug.Log("Horizontal");
            if(distance.x > 0)
            {
                Debug.Log("Right Swipe");
                removeNext(1);
            }
            if(distance.x < 0)
            {
                Debug.Log("Left Swipe");
                removeNext(0);
            }
        }
        
    }
}
