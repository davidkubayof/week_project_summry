export default function NewReportPage() {

  return (
    <>
      <div>NewReportPage</div>
      message:<input type="text" placeholder="message" />
      <br />
      urgency:<input type="text" placeholder="urgency" />
      <br />
      category:<input type="text" placeholder="category"/>
      <form action="/profile" method="post" encType="multipart/form-data">
        <input type="file" name="avatar" />
      </form>   
    </>
  )
}
