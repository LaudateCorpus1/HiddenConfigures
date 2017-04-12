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

    void removeNext()
    {
        if(counter == 10)
        {
            t10.gameObject.SetActive(false);
        }
        if(counter == 9)
        {
            t9.gameObject.SetActive(false);
        }
        if (counter == 8)
        {
            t8.gameObject.SetActive(false);
        }
        if (counter == 7)
        {
            t7.gameObject.SetActive(false);
        }
        if (counter == 6)
        {
            t6.gameObject.SetActive(false);
        }
        if (counter == 5)
        {
            t5.gameObject.SetActive(false);
        }
        if (counter == 4)
        {
            t4.gameObject.SetActive(false);
        }
        if (counter == 3)
        {
            t3.gameObject.SetActive(false);
        }
        if (counter == 2)
        {
            t2.gameObject.SetActive(false);
        }
        if (counter == 1)
        {
            t1.gameObject.SetActive(false);
            SceneManager.LoadScene("Results");
        }
        counter--;
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
                removeNext();
            }
            if(distance.x < 0)
            {
                Debug.Log("Left Swipe");
                removeNext();
            }
        }
        
    }
}
