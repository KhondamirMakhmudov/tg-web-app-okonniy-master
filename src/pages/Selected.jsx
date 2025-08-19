import NavigationBottom from "../components/bottom-navigation";

export default function Selected() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-800">Selected Page</h1>
      <p className="mt-4 text-lg text-gray-600">
        This is the Selected page. You can add more information here 📖
      </p>

      <NavigationBottom />
    </div>
  );
}
