### Fragment
### Adding a user interface for Fragment
### Adding a fragment to an activity

-----------

### Fragment

* A Fragment is a section of an Activity, which has:
  * has its own lifecycle
  * receives its own input events
  * can be added or removed while the Activity is running.

* A Fragment must always be embedded in an Activity
* Fragment like a "sub activity" that you can reuse in different activities

### Adding a user interface for Fragment
* Inflate the layout for fragment
* To provide a **layout for a fragment**, you must implement the `onCreateView()` of `Fragment class`

```
public static class ExampleFragment extends Fragment {
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.example_fragment, container, false);
    }
}
```
### Adding a fragment to an activity
* **A Fragment must always be embedded in an Activity**
