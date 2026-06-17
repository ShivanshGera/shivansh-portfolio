function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 mt-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-slate-500">
          © {new Date().getFullYear()} Shivansh Gera.
          Built with React, Tailwind CSS and Framer Motion.
        </p>
      </div>
    </footer>
  );
}

export default Footer;