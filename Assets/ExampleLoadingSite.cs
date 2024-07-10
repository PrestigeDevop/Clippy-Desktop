using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.UI;
using VoltstroStudios.UnityWebBrowser;
using VoltstroStudios.UnityWebBrowser.Core;
using VoltstroStudios.UnityWebBrowser.Events;
using static TMPro.SpriteAssetUtilities.TexturePacker_JsonArray;

public class ExampleLoadingSite : MonoBehaviour
{

    [SerializeField] //SerializeField allows us to set this in the editor
    private BaseUwbClientManager clientManager;
    public Button _navigate;

    string mywebsite = Application.streamingAssetsPath;
    string urlpath;
    string page;
    string final;
    UnityEvent myevent;
    bool loaded = false;

    private void Awake()
    {
         mywebsite = Application.streamingAssetsPath;
         urlpath = mywebsite;
         page = Path.Combine(urlpath, "index.html");
         final = urlpath + "/index.html";
    }
    private void Start()
    {
        Debug.Log("TEST");
        _navigate.onClick.AddListener(Myevent);
        StartCoroutine(Example());
    }
    IEnumerator Example()
    {
        Debug.Log("Started Coroutine");

        yield return new WaitUntil(() => clientManager.browserClient.IsConnected==true);
        Debug.Log("DONE");
        print(Time.time);
        Ready();
    }

 

    private OnLoadStartDelegate Ready()
    {
        debug.print("Ready?");
        LoadMySite();
        loaded = true;
        throw new NotImplementedException();
        
    }

   


    public void LoadMySite()
    {
        string mywebsite = Application.streamingAssetsPath;
        string urlpath = mywebsite;
        string page = Path.Combine(urlpath, "index.html");
        if (File.Exists(page)) { Debug.Log("Found"); }
        else
        {
            Debug.Log(page);
            Debug.Log("error 404");
        }
        clientManager.NavigateUrl(final);
        //manger.NavigateUrl("https://github.com");

    }
    // Start is called before the first frame update




    public void Myevent()
    {
        Debug.Log("Clicked");

        string mywebsite = Application.streamingAssetsPath;
        string urlpath = mywebsite;
        string page = Path.Combine(urlpath, "index.html");
        string final = urlpath  + "/index.html";
        print(final);
        clientManager.LoadHtml(final);
        clientManager.NavigateUrl(final);
        
    }
}
  