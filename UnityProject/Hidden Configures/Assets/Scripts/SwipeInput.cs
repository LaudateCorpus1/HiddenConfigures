using UnityEngine;
using UnityEngine.SceneManagement;

public class SwipeInput : MonoBehaviour
{
    private Vector3 startPosition = Vector3.zero;
    private Vector3 endPosition = Vector3.zero;
    public int counter = 10;

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
        if (Input.GetMouseButtonDown(0))    // swipe begins
        {
            startPosition = Camera.main.ScreenToWorldPoint(Input.mousePosition);
        }
        if (Input.GetMouseButtonUp(0))    // swipe ends
        {
            endPosition = Camera.main.ScreenToWorldPoint(Input.mousePosition);
        }

        if (startPosition != endPosition && startPosition != Vector3.zero && endPosition != Vector3.zero)
        {
            float deltaX = endPosition.x - startPosition.x;
            float deltaY = endPosition.y - startPosition.y;
            if ((deltaX > 5.0f || deltaX < -5.0f) && (deltaY >= -1.0f || deltaY <= 1.0f))
            {
                if (startPosition.x < endPosition.x) // swipe LTR
                {
                    print("LTR");
                    removeNext();
                }
                else // swipe RTL
                {
                    print("RTL");
                    removeNext();
                }
            }
            startPosition = endPosition = Vector3.zero;
        }
    }
}
