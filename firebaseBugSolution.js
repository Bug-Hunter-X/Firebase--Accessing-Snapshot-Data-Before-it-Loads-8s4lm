To fix this, ensure you access the snapshot data within the `.then()` block of the promise returned by `get()` or use `async/await` to handle the asynchronous operation.  Here's an example using async/await:

```javascript
async function getData() {
  try {
    const docRef = doc(db, "collection", "docId");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error fetching document:", error);
  }
}
```
This ensures the `docSnap` is loaded before attempting to access its data.