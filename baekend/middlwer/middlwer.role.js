export function isRole(req, res, next) {
    if (!req.user.role){
      return res.status(401).json({ message: 'role not alowed' })
    }
    if (req.user.role !== 'admin' && req.user.role !== 'agent') {
      return res.status(403).json({ message: 'Access denied' })
    }   
    next();
}