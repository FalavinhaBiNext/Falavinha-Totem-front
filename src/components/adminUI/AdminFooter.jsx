export default function AdminFooter() {
  return (
    <footer className="relative z-10 w-full h-auto p-3 mt-auto sm:p-4 bg-app_bg">
      <span className="block w-full mt-auto text-xs text-center sm:text-sm text-light_color font-gilroyLight">
        © {new Date().getFullYear()} | Falavinha Next - Todos os direitos
        reservados
      </span>
    </footer>
  );
}
